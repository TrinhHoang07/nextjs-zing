interface infoUser {
    id: number,
    title: string,
    description: string,
    name: string,
    view: string,
    time: string,
    thumbnail: string,
    video_key: string
}
interface arrUser {
    users: []
}
function Users(props: arrUser) {
    const data: infoUser[] = props.users;

    return (
        <div className="">
            <h1>List Users</h1>
            {data.map(item => (
                <div key={item.id}>
                    <p>
                        {item.title}
                    </p>
                </div>
            ))}
        </div>
    )
}
// export async function getStaticProps() {
//     const response = await fetch('https://json-by-hoang07.herokuapp.com/api/discovers')
//     const data = await response.json()
//     console.log(data)
//
//     return {
//         props: {
//             users: data
//         }
//     }
// }

export async function getServerSideProps() {
    const response = await fetch('https://json-by-hoang07.herokuapp.com/api/discovers')
    const data = await response.json()
    console.log(data)

    return {
        props: {
            users: data
        }
    }
}

export default Users