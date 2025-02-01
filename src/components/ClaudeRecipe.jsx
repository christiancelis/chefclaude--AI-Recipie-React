import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe({data}){
    // console.log(`"${JSON.stringify(data[0].generated_text)}"`)
    return (
        <div>
            <h3>Generated Recipe:</h3>
            <p>{JSON.stringify(data[0].generated_text)}</p>
        </div>
    )
}