import Select from 'react-select';

import "../App.css"
const Selecttag = () => {

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div>
    <h2>MultiSelct Form :</h2>
    <Select className='multiform' isMulti options={options}/>
    </div>
  )
}

export default Selecttag