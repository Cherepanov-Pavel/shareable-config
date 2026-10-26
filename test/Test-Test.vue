<script setup lang="ts">
// const test = [
// 	1,
// 	2,
// ];
/* TODO:
wqrwq
*/

const newCount = 1;

const emit = defineEmits<{
	change: [id: number]; // named tuple syntax
}>();
</script>

<i18n>
{
	"foo": "123"
}
</i18n>

<template>
	test
	<!-- TODO:
	qwrqw
	-->
	<label
		for="framework-select"
	>
		Выберите фреймворк:
	</label>
	<button
		type="button"
		@click="emit('change', parseInt(String(newCount) || '1'))"
	>
		test
	</button>
</template>

<style>
.class {
	/* stylelint-disable-next-line color-named */
	color: red;
}

/* stylelint-disable-next-line selector-max-id */
#container {
	height: 100%;

	font-family: "Inter", "Roboto", "Helvetica Neue", "Arial Nova", "Nimbus Sans", "Arial", sans-serif;
}

/* TODO:
fef
*/
</style>

<!-- TODO:
test it
-->
<!-- <button
		type="button"
		@click="emit('change', parseInt(String(newCount) || "1"))"
	>
		test
	</button> -->
