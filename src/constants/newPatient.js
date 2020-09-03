export const newPatient = [
  {
    name: 'patientName',
    label: 'Patient Name*',
    type: 'text'
  },
  {
    name: 'species',
    label: 'Species*',
    type: 'select',
    values: [
      { label: 'Canine', value: 'canine' },
      { label: 'Feline', value: 'feline' },
      { label: 'Rabbit', value: 'rabbit' }
    ]
  },
  {
    name: 'breed',
    label: 'Breed*',
    type: 'text'
  },
  {
    name: 'gender',
    label: 'Gender*',
    type: 'select',
    values: [
      { label: 'Male Neutured', value: 'M/N' },
      { label: 'Male Intact', value: 'M' },
      { label: 'Female Spayed', value: 'F/S' },
      { label: 'Female Intact', value: 'F' }
    ]
  },
  {
    name: 'age',
    label: 'Age*',
    type: 'text'
  }
];

export const newClient = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'lastName', label: 'Last Name*', type: 'text' },
  { name: 'address', label: 'Address', type: 'text' },
  { name: 'phoneNumber', label: 'Phone Number', type: 'text' }
]