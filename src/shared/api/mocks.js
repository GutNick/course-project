import { setupWorker, rest } from "msw"

const worker = setupWorker(
    rest.get("/api/getGoods", (req, res, ctx) => {
        const resp = {
            isSuccess: true,
            data: {
                items: []
            }
        };
        return res(ctx.status(200), ctx.json(resp));
    }),
)

worker.start().then(() => console.debug("Mock is on"))
