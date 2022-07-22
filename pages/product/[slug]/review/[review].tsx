import {useRouter} from 'next/router'
function Slug() {
    const router = useRouter();
    const {review} = router.query;
    return (
        <h1>Review: {review}</h1>
    )
}
export default Slug;