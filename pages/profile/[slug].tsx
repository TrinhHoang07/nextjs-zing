import {useRouter} from 'next/router'
function Slug() {

    const router = useRouter();
    const {slug} = router.query;

    return (
        <h1>Slug: {slug}</h1>
    )
}
export default Slug