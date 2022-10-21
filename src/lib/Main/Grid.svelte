<script lang="ts">
  import { onMount } from "svelte";
  import { GRID_HEIGHT, GRID_WIDTH, smallView } from "../../ts/env";
  import BackgroundCell from "./Grid/BackgroundCell.svelte";
  import ForegroundCell from "./Grid/ForegroundCell.svelte";

  let xar = [];
  let yar = [];
  let pop = false;

  onMount(() => {
    pop = false;

    for (let x = 0; x < GRID_WIDTH; x++) {
      xar.push(x);
    }

    for (let y = 0; y < GRID_HEIGHT; y++) {
      yar.push(y);
    }

    pop = true;
  });
</script>

{#if pop}
  <div class="grid" class:small={$smallView}>
    <div class="fg">
      {#each yar as y}
        <div class="row">
          {#each xar as x}
            <ForegroundCell {x} {y} />
          {/each}
        </div>
      {/each}
    </div>
    <div class="bg">
      {#each yar as y}
        <div class="row">
          {#each xar as x}
            <BackgroundCell {x} {y} />
          {/each}
        </div>
      {/each}
    </div>
  </div>
{/if}
