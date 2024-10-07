<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionResult } from '@sveltejs/kit';
  
    let petName = '';
    let owner = '';
    let message = '';
  
    const handleSubmit = () => {
      return async ({ result }: { result: ActionResult }) => {
        if (result.type === 'success') {
          petName = '';
          owner = '';
          message = 'Pet added successfully!';
        } else {
          message = result.data?.message || 'Error adding pet. Please try again.';
        }
      };
    };
</script>
  
<div class="container mx-auto mt-8 max-w-md">
    <h1 class="text-2xl font-bold mb-4">Add a New Pet</h1>
    <form method="POST" use:enhance={handleSubmit} class="space-y-4">
      <div>
        <label for="name" class="block text-sm font-medium text-gray-700">Pet Name</label>
        <input
          type="text"
          id="name"
          name="name"
          bind:value={petName}
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label for="owner" class="block text-sm font-medium text-gray-700">Owner Name</label>
        <input
          type="text"
          id="owner"
          name="owner"
          bind:value={owner}
          required
          class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <button
        type="submit"
        class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add Pet
      </button>
    </form>
    {#if message}
      <p class="mt-4 text-center text-sm font-medium {message.includes('Error') ? 'text-red-600' : 'text-green-600'}">{message}</p>
    {/if}
</div>
