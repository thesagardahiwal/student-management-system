import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { useFirebase } from '@/firebase/FirebaseContext'

function Form() {
  const firebase = useFirebase();
  const [form, setForm] = useState({
    Name:"",
    Roll_No:"",
    Div:"",
    Current_Year:"",
    Branch: "",
    DOB:"",
    Blood_Group:"",
    Gender:"",
    HSC_Marks:"",
    SSC_Marks:"",
    Email:"",
    Mobile_No:"",
    Address:"",
    District:"",
    Taluka:"",
    State:"",
    Pin_Code:""
  })

  const [ submit, setSubmit ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    firebase.addStudentInfo(form)
    setSubmit(true);
  }
  return (
    <div className='flex justify-center'>
      {!submit && 
      <form onSubmit={e => handleSubmit(e)} className='flex flex-col w-[50%] gap-2'>


      <Label htmlFor="Name">Name</Label>
      <Input id='Name' type="text" value={form.Name} onChange={e => setForm({...form, Name: e.target.value})} />

      <Label htmlFor="Roll_No">Rool No</Label>
      <Input id='Roll_No' type="text" value={form.Roll_No} onChange={e => setForm({...form, Roll_No: e.target.value})} />

      <Label htmlFor="Div">Div</Label>
      <Input id='Div' type="text" value={form.Div} onChange={e => setForm({...form, Div: e.target.value})} />

      <Label htmlFor="Current_Year">Current Year</Label>
      <Input id='Current_Year' type="text" value={form.Current_Year} onChange={e => setForm({...form, Current_Year: e.target.value})} />

      <Label htmlFor="branch">Branch</Label>
      <Input id='branch' type="text" value={form.Branch} onChange={e => setForm({...form, Branch: e.target.value})} />

      <Label htmlFor="DOB">DOB</Label>
      <Input id='DOB' type="text" value={form.DOB} onChange={e => setForm({...form, DOB: e.target.value})} />

      <Label htmlFor="Blood">Blood Group</Label>
      <Input type="text" id='Blood' value={form.Blood_Group} onChange={e => setForm({...form, Blood_Group: e.target.value})} />

      <Label htmlFor='Gender'>Gender</Label>
      <Input id='Gender' type="text" value={form.Gender} onChange={e => setForm({...form, Gender: e.target.value})} />

      <Label htmlFor='HSC_Marks'>HSC Marks</Label>
      <Input id='HSC_Marks' type="text" value={form.HSC_Marks} onChange={e => setForm({...form, HSC_Marks: e.target.value})} />

      <Label htmlFor='SSC_Marks'>SSC Marks</Label>
      <Input id='SSC_Marks' type="text" value={form.SSC_Marks} onChange={e => setForm({...form, SSC_Marks: e.target.value})} />

      <Label htmlFor='Email'>Email</Label>
      <Input id='Email' type="text" value={form.Email} onChange={e => setForm({...form, Email: e.target.value})} />

      <Label htmlFor='Mobile_No'>Mobile No</Label>
      <Input id='Mobile_No' type="text" value={form.Mobile_No} onChange={e => setForm({...form, Mobile_No: e.target.value})} />

      <Label htmlFor='Adderess'>Adderess</Label>
      <Input id='Adderess' type="text" value={form.Address} onChange={e => setForm({...form, Address: e.target.value})} />

      <Label htmlFor='District'>District</Label>
      <Input id='District' type="text" value={form.District} onChange={e => setForm({...form, District: e.target.value})} />

      <Label htmlFor='Taluka'>Taluka</Label>
      <Input id='Taluka' type="text" value={form.Taluka} onChange={e => setForm({...form, Taluka: e.target.value})} />

      <Label htmlFor='State'>State</Label>
      <Input id='State' type="text" value={form.State} onChange={e => setForm({...form, State: e.target.value})} />

      <Label htmlFor='Pin_Code'>Pin Code</Label>
      <Input id='Pin_Code' type="text" value={form.Pin_Code} onChange={e => setForm({...form, Pin_Code: e.target.value})} />

      <Button>Submit</Button>
      
      </form>
  }
  {submit && <>
    <div>
      Data Submited Successfully!
    </div>
  
  </>}
      
    </div>
  )
}

export default Form