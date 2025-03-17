async function main()
{
    const url = "https://openlibrary.org/search.json?q=the+lord+of+the+rings"
    const req = await fetch(url)
    if(req.ok)
    {
        const data = await req.json()
        console.log(data.docs[0].author_name)
    }
}

main();