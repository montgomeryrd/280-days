import Form from '../../components/Form';

const Registration = ({ setData }) => {
    return (
        <>
            <h1>We're Pregnant!</h1>
            <p>
                Your daily guide to mindful of your baby's progress 
                and how to be supportive of your mom-to-be.
            </p>
            
            <Form setData={setData} />  
        </>
    )
}

export default Registration
