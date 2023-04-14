export function CommentFormatter({ comment, handleClick }) {  

    // ! comment -> Array list
    // comment -> comment-Description "String", comment-mentionData [Array], comment-HashTagData [Array]
    // handleClick -> Model open Function /-> true and false

    // !! ----- >> [        dangerouslySetInnerHTML Set    ] << --- 


    let commentArray = [];
    let people = comment?.tagPeople?.reduce((acc, cur) => [...acc, cur.slice(cur.indexOf('|') + 1, cur.lastIndexOf('|'))], [])
    let hashtags = comment?.hashtag?.reduce((acc, cur) => [...acc, cur.slice(cur.indexOf('|') + 1, cur.lastIndexOf('>'))], [])
    let commentUrl = comment.comment.split(' ').filter((e) => {
        return e.toLowerCase().includes('https:') || e.toLowerCase().includes('http:') || e.toLowerCase().includes('www.')
    })
    let merged = [...(new Set([...people, ...hashtags, ...commentUrl])).values()];
    let tempStr = (Math.random(800000) * 100).toFixed(0);


    let res = merged.reduce((acc, cur) => {
        return acc.replaceAll(cur, `<${tempStr}>${cur}<${tempStr}>`)
    }, comment.comment)

    res.split(`<${tempStr}>`).forEach(item => {
        let index = merged.findIndex(val => val === item);
        if (index > -1) {
            commentArray.push(<span onClick={() => handleClick(item)} className="blue-color">{item}</span>)
        } else {
            commentArray.push(item)
        }
    })

    return commentArray
}