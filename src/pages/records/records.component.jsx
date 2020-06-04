import React, { useEffect, useState } from 'react';
import './records.styles.css';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { withRouter, Link } from 'react-router-dom';
import { MessageBar, MessageBarType, PrimaryButton } from 'office-ui-fabric-react';
import { createRecord } from '../../providers/api/users/UserProvider';

function Records(props) {
  initializeIcons('https://static2.sharepointonline.com/files/fabric/assets/icons/');

  const [town, setTown] = useState('');
  const [habitatType, seHabitatType] = useState('');
  const [budgetMin, setBudgetMin] = useState(500);
  const [budgetMax, setBudgetMax] = useState(700);
  const [habitationSurface, setHabitationSurface] = useState(700);
  const [successRecord, hasSuccessRecord] = useState(false);
  const [failedRecord, hasFailedRecord] = useState(false);

  const [selectedItem, setSelectedItem] = React.useState('');
  const dropdownControlledExampleOptions = [
    { key: 'type', text: 'Type', itemType: DropdownMenuItemType.Header },
    { key: 'chambre', text: 'Chambre' },
    { key: 'studio1', text: 'Studio T1' },
    { key: 'studio2', text: 'Studio T2' },
    { key: 'studio3', text: 'Studio T3' },
    { key: 'collocation', text: 'collocation' },
  ];
  const onChange = (event, item) => {
    setSelectedItem(item);
  };
  useEffect(() => seHabitatType(selectedItem.text), [selectedItem]);

  const createRecords = async () => {
    try {
      const response = await createRecord(
        habitatType,
        budgetMin,
        budgetMax,
        habitationSurface,
        town
      );
      hasSuccessRecord(true);
    } catch (e) {
      hasFailedRecord(true);
    }
  };

  const { history } = props;

  return (
    <>
      <div className="records">
        <h1 className="records-title">Creer un dossier</h1>
        <h4>
          Veuillez renseigner les informations suivantes. Nous allons les utiliser pour vos
          premieres propositions
        </h4>
        <div style={{ width: '500px', marginTop: '40px' }}>
          <SearchBox
            placeholder="Dans quelle ville voulez-vous allez?"
            onChange={(e) => setTown(e.target.value)}
            onSearch={(newValue) => console.log(`value is ${newValue}`)}
            iconProps={{ styles: { root: { color: '#00bfa6' } } }}
          />
          <div style={{ width: '500px', marginTop: '40px' }}>
            <Slider
              label="Superficie de preference(metre carre)"
              min={0}
              max={200}
              step={1}
              defaultValue={0}
              showValue
              snapToStep
              styles={{ titleLabel: { color: '#29264e' }, valueLabel: { color: '#00bfa6' } }}
              ariaValueText={(value) => setHabitationSurface(value)}
            />
          </div>
        </div>
        <div style={{ width: '500px', marginTop: '40px' }}>
          <Slider
            label="Budget minimum(€)"
            min={0}
            max={1000}
            step={10}
            defaultValue={0}
            showValue
            snapToStep
            styles={{ titleLabel: { color: '#29264e' }, valueLabel: { color: '#00bfa6' } }}
            ariaValueText={(value) => setBudgetMin(value)}
          />
        </div>
        <div style={{ width: '500px', marginTop: '40px' }}>
          <Slider
            label="Budget maximum(€)"
            min={0}
            max={1000}
            step={10}
            defaultValue={220}
            showValue
            snapToStep
            styles={{
              titleLabel: { color: '#29264e' },
              valueLabel: { color: '#00bfa6' },
              zeroTick: { color: 'red' },
            }}
            ariaValueText={(value) => setBudgetMax(value)}
          />
        </div>
        <div style={{ marginTop: '40px' }}>
          <Dropdown
            electedKey={selectedItem ? selectedItem.key : undefined}
            placeholder="Selectionner une option"
            label="Types de logement"
            options={dropdownControlledExampleOptions}
            style={{ color: '#00bfa6', width: '800px' }}
            styles={{
              title: { color: '#29264e' },
              dropdownItem: { color: 'black' },
              label: { color: '#29264e' },
              dropdownItemHeader: { color: '#29264e' },
            }}
            onChange={onChange}
          />
        </div>
        {successRecord === true ? (
          <div style={{ width: '450px', marginTop: '20px' }}>
            <MessageBar
              // actions={
              //   <div>
              //     <MessageBarButton>Yes</MessageBarButton>
              //     <MessageBarButton>No</MessageBarButton>
              //   </div>
              // }
              messageBarType={MessageBarType.success}
              isMultiline={false}
            >
              Votre dossier est cree avec succes. Nous revenons vers vous tres vite
            </MessageBar>
            <PrimaryButton
              onClick={() => history.push('/record-list')}
              style={{
                background: '#29264e',
                borderStyle: 'none',
                fontSize: '18px',
                marginTop: '30px',
                marginLeft: '40px',
                width: '300px',
                height: '50px',
              }}
              ariaDescription="dossier"
            >
              Retrouvez vos dossiers
            </PrimaryButton>
          </div>
        ) : (
          <></>
        )}
        {failedRecord ? (
          <div style={{ width: '450px', marginTop: '20px' }}>
            <MessageBar
              messageBarType={MessageBarType.error}
              isMultiline={false}
              dismissButtonAriaLabel="Close"
            >
              Une erreur est survenue. Veuillez resaissir votre dossier
            </MessageBar>
          </div>
        ) : (
          <></>
        )}
        <div className="records-choice">
          <PrimaryButton
            onClick={createRecords}
            style={{
              background: '#00bfa6',
              borderStyle: 'none',
              fontSize: '18px',
              marginTop: '30px',
              width: '400px',
              height: '50px',
            }}
            ariaDescription="dossier"
          >
            Je cree un dossier
          </PrimaryButton>
        </div>
      </div>
    </>
  );
}
export default withRouter(Records);
