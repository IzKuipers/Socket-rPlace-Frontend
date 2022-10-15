<script lang="ts">
  import { onMount } from "svelte";
  import BackgroundCell from "./Grid/BackgroundCell.svelte";

  let xar = [];
  let yar = [];
  let pop = false;

  const GRID_WIDTH = 40;
  const GRID_HEIGHT = 22;

  onMount(() => {
    pop = false;
    for (let x = 0; x < GRID_WIDTH; x++) {
      xar.push(x);
    }

    for (let y = 0; y < GRID_HEIGHT; y++) {
      yar.push(y);
    }

    console.log(xar, yar);
    pop = true;
  });
</script>

{#if pop}
  <div class="grid bg">
    {#each yar as y}
      <div class="row">
        {#each xar as x}
          <BackgroundCell {x} {y} />
        {/each}
      </div>
    {/each}
  </div>
{/if}
