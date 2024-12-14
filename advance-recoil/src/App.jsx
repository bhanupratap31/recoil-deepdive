import { useState } from "react";
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from "./atoms";
import { RecoilRoot, useRecoilStoreID, useRecoilValue} from "recoil";

function App(){
    return <div>
        <RecoilRoot>
        <MainApp/>
        </RecoilRoot>
    </div>
}

function MainApp(){
    const networkNotificationsCount = useRecoilValue(networkAtom);
    const jobsNotificationsCount = useRecoilValue(jobsAtom);
    const notificationCount = useRecoilValue(notificationsAtom);
    const messageNotificationCount = useRecoilValue(messagingAtom);


    return (
        <div>
            <button>Home</button>

            <button>My network ({networkNotificationsCount >=100 ? "99+": networkNotificationsCount})</button>
            <button>Jobs ({jobsNotificationsCount >=100? "99+": jobsNotificationsCount})</button>
            <button>Messaging ({messageNotificationCount >=100?"99+": messageNotificationCount})</button>
            <button>Notifications ({notificationCount >=100? "99+": notificationCount})</button>

            <button>Me</button>

        </div>
    )
}

export default App;