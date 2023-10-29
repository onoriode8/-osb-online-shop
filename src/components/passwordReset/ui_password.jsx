
import Card from "../../util/card/card";
import Btn from '../../util/loginBtn/loginBtn';
import { Spinner } from '../../util/spinner/spinner';

const inputStyles = {
    borderTop: 'none',
    borderBottom: '1px solid black',
    borderRight: 'none',
    borderLeft: 'none',
    outline: "none",
    width: "70%",
    boxSizing: 'border-box',
    padding: '12px 0px',
}


const uiPassword = ({passwordResetComponent, showUpdatePasswordComponent, 
            spinner, changePasswordHandler,
            setPassword, setConfirmPassword,
            error, formSubmittion, retrievedUser,
            getCodeHandler, setEmail, sendCodeHandler, setCode}) => (
    <div style={{marginTop: '10em'}}>
        {passwordResetComponent && <Card displayProps={error !== null ? error : "Reset Password"}>
            {!formSubmittion && <div>
                {spinner && <Spinner />}
                <form onSubmit={getCodeHandler}>
                    <label htmlFor="email">Enter Email</label><br />
                    <input type="text" id="email" placeholder="email" style={inputStyles}
                            onChange={(event) => setEmail(event.target.value)} /><br /><br />
                    <Btn name='Get Code' />
                </form>
            </div>}
            {formSubmittion && <div>
                <form onSubmit={sendCodeHandler}>
                    <label htmlFor="password">Reset Password</label><br />
                    <p>Welcome {retrievedUser.username}</p>
                    <input id="password" type="text" placeholder="Enter Code" style={inputStyles}
                        onChange={(e)=> setCode(e.target.value)}/><br /><br />
                    <button type="submit">Change password</button>
                </form>
            </div>}
        </Card>}

        {/* for updated password */}
        {showUpdatePasswordComponent && <Card displayProps={error}>
            <div>
                <label>Re-enter Password</label>
                {spinner && <Spinner />}
                <input type="text" placeholder="password" style={inputStyles}
                onChange={(event) => setConfirmPassword(event.target.value)} />
            </div>
            <div>
                <form onSubmit={changePasswordHandler}>
                    <label>Enter New Password</label>
                    <input type="text" placeholder="password" style={inputStyles}
                        onChange={(event) => setPassword(event.target.value)} /><br />
                    {/* <button type="submit">Change Password</button> */}
                    <Btn name='Change Password' />
                </form>
            </div>
        </Card>}
    </div>
);

export default uiPassword;