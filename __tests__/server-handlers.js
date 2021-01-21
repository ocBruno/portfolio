import { rest } from "msw" // msw supports graphql too!
import * as MostPopularArticlesData from "./data/MostPopularArticlesData.json"

const NY_MOST_SHARED_API_KEY = process.env.NEXT_PUBLIC_NY_MOST_SHARED_API_KEY

const handlers = [
  rest.get(
    `https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=${NY_MOST_SHARED_API_KEY}`,
    async (req, res, ctx) => {
      console.log(MostPopularArticlesData)

      return res(ctx.json({ MostPopularArticlesData }))
    }
  ),
  // rest.post("/checkout", async (req, res, ctx) => {
  //   const user = await users.login(JSON.parse(req.body))
  //   const isAuthorized = user.authorize(req.headers.Authorization)
  //   if (!isAuthorized) {
  //     return res(ctx.status(401), ctx.json({ message: "Not authorized" }))
  //   }
  //   const shoppingCart = JSON.parse(req.body)
  //   // do whatever other things you need to do with this shopping cart
  //   return res(ctx.json({ success: true }))
  // }),
]
export { handlers }
