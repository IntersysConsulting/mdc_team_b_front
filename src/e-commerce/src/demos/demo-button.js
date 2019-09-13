import React, {useState} from 'react';
import CartDemo from '../components/cart/demo.jsx';
import AcceptButtonDemo from '../components/accept-button/demo.jsx';
import DeleteButtonDemo from '../components/delete-button/demo.jsx';
import CancelButtonDemo from '../components/cancel-button/demo.jsx';
import AddButtonDemo from '../components/add-button/demo.jsx';
import EditButtonDemo from '../components/edit-button/demo.jsx';
import ChangeViewButtonDemo from '../components/change-view-button/demo.jsx';
import ManageInfoButtonDemo from '../components/manage-info-button/demo.jsx';
import AcceptButton from '../components/accept-button/accept-button.jsx';
import MenuButtonDemo from '../components/menu-button/demo.jsx';
import ToggleVisibilityButtonDemo from '../components/password-field/demo.jsx';


const DemoButton = () => {
  const defaultAlerts = true;
  const [appState, setAppState] = useState({alerts: defaultAlerts});

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          right: 0,
          zIndex: 1,
        }}
      >
        <AcceptButton
          onClick={() => {
            setAppState({alerts: !appState.alerts});
          }}
          className={appState.alerts ? 'bg-green' : 'bg-red'}
        >
          {appState.alerts ? 'Alerts are ON' : 'Alerts are OFF'}
        </AcceptButton>
      </div>
      <AcceptButtonDemo alerts={appState.alerts}></AcceptButtonDemo>
      <AddButtonDemo alerts={appState.alerts}></AddButtonDemo>
      <CancelButtonDemo alerts={appState.alerts}></CancelButtonDemo>
      <CartDemo alerts={appState.alerts}></CartDemo>
      <ChangeViewButtonDemo alerts={appState.alerts}></ChangeViewButtonDemo>
      <DeleteButtonDemo alerts={appState.alerts}></DeleteButtonDemo>
      <EditButtonDemo alerts={appState.alerts}></EditButtonDemo>
      <ManageInfoButtonDemo alerts={appState.alerts}></ManageInfoButtonDemo>
      <MenuButtonDemo alerts={appState.alerts}></MenuButtonDemo>
      <ToggleVisibilityButtonDemo
        alerts={appState.alerts}
      ></ToggleVisibilityButtonDemo>

    </div>
  );
};

export default DemoButton;
