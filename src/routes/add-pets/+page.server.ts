import { conn } from '$lib/conn.server';
import { pets } from '$lib/schema';
import { fail } from '@sveltejs/kit';
import type { Actions } from './$types';
import type { RequestEvent } from '@sveltejs/kit';

export const actions: Actions = {
  default: async ({ request }: RequestEvent) => {
    const formData = await request.formData();
    const name = formData.get('name') as string;
    const owner = formData.get('owner') as string;

    if (!name || !owner) {
      return fail(400, { message: 'Name and owner are required' });
    }

    try {
      await conn.insert(pets).values({ name, owner });
      return { success: true };
    } catch (error) {
      console.error('Error adding pet:', error);
      if(error instanceof Error) {
        return fail(500, { message: `Error adding pet to database: ${error.message}`});
      }
      return fail(500, { message: 'Unknown error occurred while adding pet.' });
    }
  }
};
