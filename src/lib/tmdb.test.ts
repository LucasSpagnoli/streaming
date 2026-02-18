import {it, describe, expect, vi} from 'vitest'
import getMovie from "./tmdb";

describe('mdb', () => {
    it("It should return the movie Elite Squad", async () => {

        vi.spyOn(global, "fetch")
            .mockResolvedValueOnce({
                json: async () => ({
                    name: "Elite Squad",
                })
            } as any)

        const movie = await getMovie(7347)
        expect(movie.data.name).toBe("Elite Squad")
    })
})