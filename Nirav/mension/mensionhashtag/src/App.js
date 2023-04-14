import React, { useState, useRef } from 'react'
import { EditorState, convertToRaw } from 'draft-js'
import Editor from 'draft-js-plugins-editor'
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin'
import 'draft-js/dist/Draft.css'
import 'draft-js-mention-plugin/lib/plugin.css'
import mentions from "./Mension"
import createHashtagPlugin from "draft-js-hashtag-plugin";


// Draft-JS-Mentions plugin configuration
const mentionPlugin = createMentionPlugin({ mentionPrefix: '#', mentionTrigger: "#" })
// const hashTagPlugin = createMentionPlugin({ mentionPrefix: '#', mentionTrigger: "#" })
const { MentionSuggestions } = mentionPlugin
// const { MentionSuggestion } = hashTagPlugin
// const hashTagPlugin = createHashtagPlugin();
const plugins = [mentionPlugin]

const App = () => {
  const [suggestions, setSuggestions] = useState(mentions)

  // Draft-JS editor configuration
  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  )
  const editor = useRef(null)

  // Check editor text for mentions
  const onSearchChange = ({ value }) => {
    // console.log('-->',defaultSuggestionsFilter(value, mentions))
    setSuggestions(defaultSuggestionsFilter(value, mentions))
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
    console.log('----', e)
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
        mentionPrefix={'@'}
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

export default App

