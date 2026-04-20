export async function mergeWithOverride(baseContent, overrideContent) {
  let result = baseContent;

  if (!overrideContent.includes('// override')) {
    return result;
  }

  const overrideBlocks = findOverrideBlocks(overrideContent);
  for (const block of overrideBlocks) {
    result = pasteOverrideInsideEndOfPath(block, result);
    if (!block.isObjectOverride) {
      // удалить элементы массива при необходимости
      result = processArrayOverride(result, block);
    }
  }
  return result;
}

function findOverrideBlocks(overrideContent) {
  const lines = overrideContent.split('\n');
  const overrideBlocks = [];
  let currentBlock = null;
  let braceCount = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.includes('// override')) {
      currentBlock = {
        startLine: i,
        lines: [line],
        path: [],
        isObjectOverride: false,
      };
      let braceCount2 = 0;
      // ищем полный path до override поля
      for (let j = i; j !== 0; j--) {
        const line2 = lines[j];
        braceCount2 += (
          line2.match(/{/g)?.length
          || line2.match(/\[/g)?.length
          || 0
        );
        braceCount2 -= (
          line2.match(/}/g)?.length
          || line2.match(/]/g)?.length
          || 0
        );
        if (braceCount2 > 0) {
          const fieldName = line2.match(/"([^"]+)"\s*:/)?.[1];
          if (fieldName) {
            currentBlock.path.unshift(fieldName);
          }
          braceCount2 = 0;
        }
      }
      continue;
    }

    if (currentBlock) {
      braceCount += (
        line.match(/{/g)?.length
        || line.match(/\[/g)?.length
        || 0
      );
      braceCount -= (
        line.match(/}/g)?.length
        || line.match(/]/g)?.length
        || 0
      );
      if (braceCount < 0) {
        if (line.match(/}/g)) {
          currentBlock.isObjectOverride = true;
        }
        // currentBlock.endLine = i + 1
        // currentBlock.path = lines.slice(startLine, endLine).join()
        overrideBlocks.push(currentBlock);
        currentBlock = null;
        braceCount = 0;
      } else {
        currentBlock.lines.push(line);
      }
    }
  }

  if (currentBlock) {
    overrideBlocks.push(currentBlock);
  }

  return overrideBlocks;
}

function processArrayOverride(baseContent, block) {
  // Разбиваем на строки
  const lines = baseContent.split('\n');
  // Копируем только нужный диапазон
  const overrideLines = lines.slice(block.startIdx, block.endIdx);

  // Обрабатываем override-блок только в этом диапазоне
  let processed = overrideLines;
  for (const line of block.lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('//')) {
      const match = trimmed.match(/^\/\/\s*"([^"]+)"/);
      if (match) {
        const elementToRemove = match[1];
        // Удаляем строку с этим элементом только в overrideLines
        processed = processed.filter((l) => {
          return !l.includes(`"${elementToRemove}"`);
        });
      }
    }
  }

  // Собираем итоговый массив строк:
  const resultLines = [
    ...lines.slice(0, block.startIdx),
    ...processed,
    ...lines.slice(block.endIdx),
  ];

  return resultLines.join('\n');
}

function findEndOfArrOrObj(startIdx, lines, block) {
  let braceCount = 0;
  for (let i = startIdx; i < lines.length; i++) {
    const line = lines[i];
    braceCount += (
      line.match(/{/g)?.length
      || line.match(/\[/g)?.length
      || 0
    );
    braceCount -= (
      line.match(/}/g)?.length
      || line.match(/]/g)?.length
      || 0
    );
    if (braceCount < 0) {
      block.endIdx = i;
      return;
    }
  }
}

function pasteOverrideInsideEndOfPath(block, result) {
  if (block.path.length) {
    const resultArr = [];
    const lines = result.split('\n');
    let pathCount = 0;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(block.path[pathCount])) {
        if (pathCount !== block.path.length - 1) {
          pathCount += 1;
        } else {
          block.startIdx = i;
          findEndOfArrOrObj(i + 1, lines, block);
        }
      }
      if (i === block.endIdx) {
        resultArr.push('');
        resultArr.push(...block.lines);
      }
      resultArr.push(lines[i]);
    }

    return resultArr.join('\n');
  }
  const lastBraceIndex = result.lastIndexOf('}');
  if (lastBraceIndex !== -1) {
    const beforeBrace = result.substring(0, lastBraceIndex);
    const afterBrace = result.substring(lastBraceIndex);
    result = (
      `${beforeBrace
      }\n${block.lines.join('\n')}\n${
        afterBrace}`
    );
  }
  return result;
}
