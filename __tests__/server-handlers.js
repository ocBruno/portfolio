import { rest } from "msw" // msw supports graphql too!

// MostPopularArticles
import {
  API_MAPPED_CATEGORIES,
  API_MAPPED_TIMESPANS,
  CATEGORY_VALUES,
  TIMESPAN_VALUES,
} from "../components/MostPopularArticles"
import * as MostPopularArticlesData from "./data/MostPopularArticlesData.json"
import { NY_TIMES_API_KEY } from "../helpers/env"

// default is initial filter value from MostPopularArticles component
const defaultCategory = API_MAPPED_CATEGORIES[CATEGORY_VALUES[0]]
const defaultValue = API_MAPPED_TIMESPANS[TIMESPAN_VALUES[0]]

export const mostPopularArticlesUrl = `https://api.nytimes.com/svc/mostpopular/v2/${defaultCategory}/${defaultValue}.json?api-key=${NY_TIMES_API_KEY}`

// mock handlers
const handlers = [
  rest.get(mostPopularArticlesUrl, async (req, res, ctx) => {
    return res(ctx.json(MostPopularArticlesData))
  }),
]
export { handlers }
