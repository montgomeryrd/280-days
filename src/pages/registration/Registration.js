import Form from '../../components/Form';

const Registration = ({ setData }) => {
    return (
        <>
            <h1>We're Pregnant!</h1>
            <p>Your daily guide to your baby's progress and ways to be supportive of the mom-to-be.</p>
            
            <Form setData={setData} />  
        </>
    )
}

export default Registration;