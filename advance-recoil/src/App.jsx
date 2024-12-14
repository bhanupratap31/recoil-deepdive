import { useState } from "react";
import { getNotificationSelector, jobsAtom, messagingAtom, networkAtom, notificationsAtom } from "./atoms";
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
    const getNofitificationCount = useRecoilValue(getNotificationSelector);

    return (
        <div>
            <button>Home</button>

            <button>My network ({networkNotificationsCount >=100 ? "99+": networkNotificationsCount})</button>
            <button>Jobs ({jobsNotificationsCount >=100? "99+": jobsNotificationsCount})</button>
            <button>Messaging ({messageNotificationCount >=100?"99+": messageNotificationCount})</button>
            <button>Notifications ({notificationCount >=100? "99+": notificationCount})</button>

            <button>Me ({getNofitificationCount>=100?"99+" : getNotificationSelector})</button>

        </div>
    )
}

export default App;