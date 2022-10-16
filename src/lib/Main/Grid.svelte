<script lang="ts">
  import { onMount } from "svelte";
  import { GRID_HEIGHT, GRID_WIDTH } from "../../ts/env";
  import type { Position } from "../../ts/grid/interface";
  import BackgroundCell from "./Grid/BackgroundCell.svelte";
  import ForegroundCell from "./Grid/ForegroundCell.svelte";

  let xar = [];
  let yar = [];
  let pop = false;
  let bga: Position[] = [];

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
  <div class="grid">
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
