import React from "react"
import PropTypes from "prop-types"
import { useMutation, useQuery, useQueryClient } from "react-query"
import { getTopStory } from "../../helpers/queries/getTopStory"

const TopStory = () => {
  // access query client
  const queryClient = useQueryClient()

  const topStoryQuery = useQuery("topStory", getTopStory)

  // Invalidate and refetch queries after mutation
  // const mutation = useMutation(getTopStory, {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries("todos")
  //   },
  // })

  return (
    <div>
      {topStoryQuery.data.map((story) => (
        <li key={story.id}>{story.title}</li>
      ))}
    </div>
  )
}

TopStory.propTypes = {}

export default TopStory
