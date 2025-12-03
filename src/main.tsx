import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { AccountSelector, AuthProvider, MagicAuth } from 'magicauth-client'
import PageSet from 'magicauth-client/dist/page/PageSet'
import StateHandle from 'magicauth-client/dist/react/StateHandle'

import { createHashHistory } from 'history'
import MRouter from './app/router/MRouter.tsx'
import SharkNode from './app/SharkNode.ts'
import { ToastContainer } from 'react-toastify'
import PasswordPopup from './popup/password-popup/PasswordPopup.tsx'
import TFAPopup from './popup/tfa-popup/TFAPopup.tsx'
import ChangePasswordPopup from './popup/change-password-popup/ChangePasswordPopup.tsx'
import ChangeNamePopup from './popup/change-username-popup/ChangeNamePopup.tsx'
import TicketPopup from './popup/ticket-popup/TicketPopup.tsx'
import CaptchaPopup from './popup/captcha-popup/CaptchaPopup.tsx'
import EmailPopup from './popup/email-popup/EmailPopup.tsx'
import ChangeEmailPopup from './popup/change-email-popup/ChangeEmailPopup.tsx'
import { Provider } from 'react-redux'
import store from './app/redux/Store.ts'
import SharkServices from './app/services/SharkServices.ts'
import Toaster from './app/util/Toaster.ts'

const hashHistory = createHashHistory()

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={ store }>
            <MRouter history={ hashHistory }>
                <AuthProvider
                    pages={ 
                        PageSet.create() 
                            .default((def) => {
                                if(def.auth) {
                                    return
                                }
                                assign('/')
                            })
                            .page('ticket', (data) => {
                                console.log(data)
                                if(data.auth) {
                                    window.openPopup(<TicketPopup type={ data.type } />)
                                    return
                                }

                                assign('/ticket?type=' + data.type)
                            })
                            .page('captcha', (data) => {
                                if(data.auth) {
                                    window.openPopup(<CaptchaPopup />)
                                    return
                                }

                                assign('/captcha')
                            })
                            .page('recover/password', () => assign('/recover/password'))
                            .page('password', () => window.openPopup(<PasswordPopup />))
                            .page('tfa/enable', () => window.openPopup(<TFAPopup />))
                            .page('change/password', () => window.openPopup(<ChangePasswordPopup />))
                            .page('change/username', () => window.openPopup(<ChangeNamePopup />))
                            .page('verify/email', () => window.openPopup(<EmailPopup />))
                            .page('change/email', () => window.openPopup(<ChangeEmailPopup />))
                    }
                    stateHandle={ 
                        StateHandle.create()
                            .addEvent('init', async () => {
                                await AccountSelector.selectAuto()
                                MagicAuth.handle().loading(false)
                            })
                            .addEvent('errordisplay', (error) => {
                                Toaster.toastError(error)
                            })
                    }  
                    userServices={ new SharkServices() }
                >
                    <App />
                    <ToastContainer containerId='center' position='bottom-center' limit={ 3 } />
                    <ToastContainer containerId='left' position='bottom-left' stacked limit={ 3 } />
                </AuthProvider>
            </MRouter>
        </Provider>
    </StrictMode>
)

const assign = (url: string) => {
    hashHistory.push(url)
}

SharkNode.initialize()
SharkNode.history(hashHistory)