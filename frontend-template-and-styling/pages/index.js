import moment from 'moment'
import Head from 'next/head'

function Posts(data) {
  return (
    <>
      <Head>
        <title>MAQE Homework Challenge - Template and Styling</title>
      </Head>
      <div className="container-sm pt-4">
        <div className="main-top mb-2">
          <h2 className="mb-3">MAQE Forum</h2>
          <small className="mb-3 d-block">Your current timezone is: {Intl.DateTimeFormat().resolvedOptions().timeZone}</small>
        </div>
        <div className="row">
          {data.posts && data.posts.map((item, index) => {
            const author = data.authors.filter((v) => v["id"] == item.author_id)[0]
            return (
              <div className="col-12" key={item.id}>
                <div className={`box-post ${(index + 1) % 2 == 0 ? 'style2' : ''}`}>
                  <div className="box-post_header">
                    <div
                      className="box-post_avartar"
                      style={{
                        backgroundImage: `url(${author.avatar_url})`
                      }}
                    />
                    <span>{author.name}</span>
                    <i>posted on {moment(item.created_at).format('dddd, MMMM D, YYYY, HH:mm')}</i>
                  </div>
                  <div className="box-post_body">
                    <div className="row">
                      <div className="col-sm-4">
                        <img className="w-100" src={item.image_url} alt="" />
                      </div>
                      <div className="col-sm-7">
                        <h4>{item.title}</h4>
                        <p>{item.body}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Posts


export async function getStaticProps(context) {
  const getPosts = await fetch(`https://maqe.github.io/json/posts.json?author_id=2`)
  const posts = await getPosts.json()
  const getAuthors = await fetch(`https://maqe.github.io/json/authors.json`)
  const authors = await getAuthors.json()
  const data = {
    posts,
    authors
  }

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: data, // will be passed to the page component as props
  }
}