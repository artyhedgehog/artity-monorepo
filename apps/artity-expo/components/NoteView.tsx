import React, { useEffect } from 'react'
import * as Linking from 'expo-linking'
import { Box, TextArea, Button, Input, HStack } from "native-base"

const linkUrl = 'denote://what/202303091908'
/* const linkUrl = 'exp://192.168.0.111:19000' */

export default function NoteView() {
    const url = Linking.useURL()

    useEffect(() => {
        setTitle(url)
    }, [url])

    const [title, setTitle] = React.useState(url)
    const [content, setContent] = React.useState('* Note content')

    return (
        <Box>
            <Input
                value={title}
                onChangeText={setTitle}
                placeholder="Note title"
            />

            <TextArea
                flex={1}
                placeholder="Note description"
                w="100%"
                value={content}
                onChangeText={setContent}
            />

            <HStack space={2}>
                <Button flex={1} onPress={ () => Linking.openURL(linkUrl) }>
                    Save denote
                </Button>

                <Button flex={1}>
                    Cancel
                </Button>
            </HStack>
        </Box>
    )
}
