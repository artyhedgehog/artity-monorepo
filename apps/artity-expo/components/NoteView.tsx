import React from 'react'
import { Box, TextArea, Button, Input, HStack } from "native-base";

export default function NoteView() {
    const [title, setTitle] = React.useState('Note title')
    const [content, setContent] = React.useState('* Note content')

    return (
        <Box>
            <Input value={title} onChangeText={setTitle} placeholder="Note title" required/>

            <TextArea flex={1} placeholder="Note description" w="100%" value={content} onChangeText={setContent} />

            <HStack space={2}>
                <Button flex={1}>
                    Save
                </Button>

                <Button flex={1}>
                    Cancel
                </Button>
            </HStack>
        </Box>

    )
}
