import { rest } from "msw" // msw supports graphql too!
import * as MostPopularArticlesData from "./data/MostPopularArticlesData.json"

const NY_MOST_SHARED_API_KEY = process.env.NEXT_PUBLIC_NY_MOST_SHARED_API_KEY

const handlers = [
  rest.get(
    `https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=${NY_MOST_SHARED_API_KEY}`,
    async (req, res, ctx) => {
      return res(ctx.json(MostPopularArticlesData))
    }
  ),
]
export { handlers }
