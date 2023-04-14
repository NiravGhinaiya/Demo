import React, { useState, useRef } from 'react'
import { EditorState , convertToRaw} from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin'
import 'draft-js/dist/Draft.css'
import 'draft-js-mention-plugin/lib/plugin.css'
// import mentions from "./Mension"
import createHashtagPlugin from "draft-js-hashtag-plugin";

const hashtag = [
    {
      name: "Matthew Russell",
      link: "https://twitter.com/mrussell247",
      avatar:
        "https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg",
      userId: 13
    },
    {
      name: "Julian Krispel-Samsel",
      link: "https://twitter.com/juliandoesstuff",
      avatar: "https://avatars2.githubusercontent.com/u/1188186?v=3&s=400"
    },
    {
      name: "Jyoti Puri",
      link: "https://twitter.com/jyopur",
      avatar: "https://avatars0.githubusercontent.com/u/2182307?v=3&s=400"
    },
    {
      name: "Max Stoiber",
      link: "https://twitter.com/mxstbr",
      avatar:
        "https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg"
    },
    {
      name: "Nik Graf",
      link: "https://twitter.com/nikgraf",
      avatar: "https://avatars0.githubusercontent.com/u/223045?v=3&s=400"
    },
    {
      name: "Pascal Brandt",
      link: "https://twitter.com/psbrandt",
      avatar:
        "https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png"
    }
  ];
    

// Draft-JS-Mentions plugin configuration
const mentionPlugin = createMentionPlugin()
// const hashTagPlugin = createMentionPlugin({mentionPrefix: '@', mentionTrigger: "@"})
const { MentionSuggestions } = mentionPlugin
// const hashtagPlugin = createHashtagPlugin();
const plugins = [mentionPlugin]

const TestDemo = () => {
    const [suggestions, setSuggestions] = useState(hashtag)

    // Draft-JS editor configuration
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    )
    const editor = useRef(null)

    // Check editor text for mentions
    const onSearchChange = ({ value }) => {
      // console.log('-->',defaultSuggestionsFilter(value, mentions))
        setSuggestions(defaultSuggestionsFilter(value, hashtag))
    }

    const onChangeMension = (editorState) => {
      // console.log(editorState)
      setEditorState(editorState);
          const a = editorState.getCurrentContent()
          const b = convertToRaw(a)
          console.log(b)
    }

    // Focus on editor window
    const focusEditor = () => {
        editor.current.focus()
    }

    const onAddMention = (e) => {
      console.log('----',e)
    }

    return (
            <div onClick={() => focusEditor()}>
                <Editor
                    ref={editor}
                    editorState={editorState}
                    plugins={plugins}
                    onChange={onChangeMension}
                    placeholder={'Type here...'}
                />
                <MentionSuggestions
                    onSearchChange={onSearchChange}
                    suggestions={suggestions}
                    onAddMention={onAddMention}
                />
                {/* <MentionSuggestions
                    // mentionPrefix={'@'}
                    // mentionTrigger={"@"}
                    onSearchChange={onSearchChange}
                    suggestions={suggestions}
                    onAddMention={onAddMention}
                />     */}
            </div>
    )
}

export default TestDemo
