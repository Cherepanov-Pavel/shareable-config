import { fileURLToPath } from 'url';
import path from 'path';
import { readFile } from 'fs/promises';
import JSON5 from 'json5';

export async function getSrcFileData({ fileName }) {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  const src = path.join(dirname, '..', '.vscode', fileName);
  const srcFileData = await readFile(src, 'utf8');

  return srcFileData;
}

export async function getSrcJSONFileData({
  fileName,
  isTs = false,
  removeDuplicateKeys = false,
}) {
  const srcFileData = await getSrcFileData({ fileName });

  // Если есть нет typescript, нет лишних проблем, возвращаем
  if (!srcFileData.includes('// typescript')) {
    return srcFileData;
  }

  const lines = srcFileData.split('\n');
  const result = [];
  let nextLineIsTypescript = false;
  let nextLineIsTypescriptMultiline = false;

  lines.forEach((line) => {
    // если следующая строка typescript only
    if (line.includes('// typescript')) {
      // если несколько следующих строк typescript only
      if (line.includes('// typescript multiline')) {
        // проверяем это конец multiline typescript комментария, или начало, и в соответствии
        // с этим ставим флаг
        nextLineIsTypescriptMultiline = !(line.includes('// typescript multiline end'));
      } else {
        nextLineIsTypescript = true; // Следующая строка будет typescript-only
      }
      // флаги проставлены, с этой строкой больше нечего делать, выходим
      return;
    }

    if (nextLineIsTypescript || nextLineIsTypescriptMultiline) {
      // Включаем строку только если нужен typescript
      if (isTs) {
        result.push(line);
      }
      nextLineIsTypescript = false; // Сбрасываем флаг
    } else {
      // Обычная строка - всегда включаем
      result.push(line);
    }
  });

  const stringResult = result.join('\n');
  if (removeDuplicateKeys) {
    return JSON.stringify(JSON5.parse(stringResult), null, 2);
  }

  return stringResult;
}
