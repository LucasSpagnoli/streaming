import {it, describe, expect, vi} from 'vitest'
import getHeroMovie from "./tmdb";

describe('mdb', () => {
    it("It should return the movie Elite Squad", async () => {

        vi.spyOn(global, "fetch")
            .mockResolvedValueOnce({
                json: async () => ({
                    name: "Elite Squad",
                })
            } as any)

        const movie = await getHeroMovie({id: 7347})
        expect(movie.name).toBe("Elite Squad")
    })
})