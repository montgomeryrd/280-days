import Form from '../../components/Form';

const Registration = ({ setData }) => {
    return (
        <>
            <h1>We're Pregnant!</h1>
            <p>
                280-Days is a proactive guide providing daily information 
                regarding the development of your baby, the 
                challenges mom is facing, and how to be a supportive partner.
            </p>
            
            <h2>Some quick details below will help personalize your experience.</h2>
            <Form setData={setData} />  
            <footer>
                <h3>User input is stored in localStorage until 280 Days completes</h3>
            </footer>
        </>
    )
}

export default Registration;