<script>
    let count = 0;
    const add = () => count += 1;
    const minus = () => count -= 1;
</script>
<div>
    <h1>Test Svelte {count}</h1>
    <button on:click={add}> Add </button>
    <button on:click={minus}> Minus </button>
</div>
