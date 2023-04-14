import React, { useState } from "react";
import { MentionsInput, Mention } from "react-mentions";

const defaultStyle = {
  control: {
    backgroundColor: "#fff",
    fontSize: 14,
    fontWeight: "normal",
    color: "#FF7715"
  },
  highlighter: {
    overflow: "hidden"
  },
  input: {
    margin: 0,
    overflow: "auto",
    height: 30
  },
  "&multiLine": {
    control: {
      fontFamily: "monospace",
      border: "1px solid silver"
    },
    highlighter: {
      padding: 9
    },
    input: {
      padding: 9,
      minHeight: 3,
      outline: 0,
      border: 0
    }
  },
  suggestions: {
    bottom: "20px",
    top: "unset",
    list: {
      backgroundColor: "white",
      border: "1px solid rgba(0,0,0,0.15)",
      fontSize: 14,
      height: 196,
      overflowY: 'scroll',
    },
    item: {
      padding: "5px 15px",
      borderBottom: "1px solid rgba(0,0,0,0.15)",
      "&focused": {
        backgroundColor: "#FF7715"
      }
    }
  }
};

const defaultMentionStyle = {
  backgroundColor: "#FF7715"
};

const users = [
  {
    id: "walter",
    display: "@Walter White"
  },
  {
    id: "jesse",
    display: "@Jesse Pinkman"
  },
  {
    id: "gus",
    display: '@Gustavo "Gus" Fring'
  },
  {
    id: "saul",
    display: "@Saul Goodman"
  },
  {
    id: "hank",
    display: "@Hank Schrader"
  },
  {
    id: "skyler",
    display: "@Skyler White"
  },
  {
    id: "mike",
    display: "@Mike Ehrmantraut"
  },
  {
    id: "walter",
    display: "@Walter White"
  },
  {
    id: "jesse",
    display: "@Jesse Pinkman"
  },
  {
    id: "gus",
    display: '@Gustavo "Gus" Fring'
  },
  {
    id: "saul",
    display: "@Saul Goodman"
  },
  {
    id: "hank",
    display: "@Hank Schrader"
  },
  {
    id: "skyler",
    display: "@Skyler White"
  },
  {
    id: "mike",
    display: "@Mike Ehrmantraut"
  }
];

// class App extends Component {
//   state = {
//     value: "hello [@Walter White]{walter} there",
//     mentions: []
//   };
//   handleChange = (event) => {
//     const value = event.target.value;
//     console.log("event: ", value);
//     const regex = /[^{}]+(?=})/g;
//     const mentions = value.match(regex);
//     console.log("mentions: ", mentions);
//     this.setState({ value: event.target.value });
//   };
//   // onAdd = id => {
//   //   console.log("added a new mention", id);
//   //   this.setState({ mentions: [...this.state.mentions, id] });
//   // };
//   render() {
//     console.log("state: ", this.state);
//     return (
//       <div
//         style={{
//           width: "100%",
//           position: "absolute",
//           bottom: 0,
//           left: 0
//         }}
//       >
//         <MentionsInput
//           value={this.state.value}
//           onChange={this.handleChange}
//           style={defaultStyle}
//         >
//           <Mention
//             markup="[__display__]{__id__}"
//             data={users}
//             // onAdd={this.onAdd}
//             style={defaultMentionStyle}
//           />
//         </MentionsInput>
//       </div>
//     );
//   }
// }


const App = () => {

  const [value, setValue] = useState('hello.. ')
  // const [mentions, setMentions] = useState([])

  // state = {
  //   value: "hello [@Walter White]{walter} there",
  //   mentions: []
  // };

  const handleChange = (event) => {
    const value = event.target.value;
    // console.log("event: ", value);
    const regex = /[^{}]+(?=})/g;
    const mentions = value.match(regex);
    // console.log("mentions: ", mentions);
    // this.setState({ value: event.target.value });
    setValue(value)
  };

  console.log(value.replace(/[{}']+/g, ''))

  return (
    <div
      style={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        left: 0
      }}
    >
      <MentionsInput
        value={value}
        onChange={handleChange}
        style={defaultStyle}
        allowSpaceInQuery
      >
        <Mention
          markup="{__display__}"
          data={users}
          // onAdd={this.onAdd}
          style={defaultMentionStyle}
          appendSpaceOnAdd={true}
        />
      </MentionsInput>
    </div>
  )
}


export default App