import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'

const Mother = () => {
  const [stories, setStories] = useState(null)
  const GetStories = () => {
    // function to fetch stories from firebase 
    setStories(['One', 'Two', 'Three'])
    console.log(stories)
  }
  const goToStory = () => {
    // function to redirect mother to specifque story
  }
  useEffect(() => {
    GetStories()
  }, [])
  return (
    <View>
      {stories === null ?
        <Text>
          Wait For Stories
    </Text>
        :
        stories.map((ele, i) => {
          return (
            <>
              <Text
                onPress={() => goToStory(i)}
                key={i.toString()}>{ele}</Text>
            </>
          )
        })
      }

    </View>
  )
}
export default Mother;