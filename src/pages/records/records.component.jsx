import React, { useEffect, useState } from 'react';
import './records.styles.css';
import { Slider } from 'office-ui-fabric-react/lib/Slider';
import { Dropdown, DropdownMenuItemType } from 'office-ui-fabric-react/lib/Dropdown';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { withRouter } from 'react-router-dom';
import { createRecord } from '../../providers/api/users/UserProvider';

function Records() {
  initializeIcons('https://static2.sharepointonline.com/files/fabric/assets/icons/');

  const [town, setTown] = useState('');
  const [habitatType, seHabitatType] = useState('');
  const [budgetMin, setBudgetMin] = useState(500);
  const [budgetMax, setBudgetMax] = useState(700);
  const [habitationSurface, setHabitationSurface] = useState(700);

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

  const createRecords = () => {
    console.log(town);
    const response = createRecord(habitatType, budgetMin, budgetMax, habitationSurface, town);
  };

  return (
    <>
      <div className="records">
        <h1 className="records-title">Creer un dossier</h1>

        <div style={{ width: '500px', marginTop: '40px' }}>
          <SearchBox
            placeholder="Dans quelle ville voulez-vous allez?"
            onChange={(e) => setTown(e.target.value)}
            onSearch={(newValue) => console.log('value is ' + newValue)}
            disableAnimation
          />
          <div style={{ width: '500px', marginTop: '40px' }}>
            <Slider
              label="Superficie de preference(metre carre)"
              min={0}
              max={1000}
              step={10}
              defaultValue={20}
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
            defaultValue={20}
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
            defaultValue={20}
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
            onChange={onChange}
          />
        </div>

        <div className="home-choice">
          <button className="btn-register-home" onClick={createRecords} type="submit">
            Creer un dossier
          </button>
        </div>
      </div>
    </>
  );
}
export default withRouter(Records);
