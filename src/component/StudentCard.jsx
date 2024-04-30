import { Label } from '@radix-ui/react-label'
import { Textarea } from "@/components/ui/textarea"
import React from 'react'

function StudentCard({form}) {
  return (
    <div className='bg-slate-300 p-1 m-1 px-2'>
              <Label htmlFor="Name">Name</Label>
      <Textarea id='Name' type="text" value={form.Name} />

      <Label htmlFor="Roll_No">Rool No</Label>
      <Textarea id='Roll_No' type="text" value={form.Roll_No} />

      <Label htmlFor="Div">Div</Label>
      <Textarea id='Div' type="text" value={form.Div}/>

      <Label htmlFor="Current_Year">Current Year</Label>
      <Textarea id='Current_Year' type="text" value={form.Current_Year} />

      <Label htmlFor="branch">Branch</Label>
      <Textarea id='branch' type="text" value={form.Branch}  />

      <Label htmlFor="DOB">DOB</Label>
      <Textarea id='DOB' type="text" value={form.DOB} />

      <Label htmlFor="Blood">Blood Group</Label>
      <Textarea type="text" id='Blood' value={form.Blood_Group}  />

      <Label htmlFor='Gender'>Gender</Label>
      <Textarea id='Gender' type="text" value={form.Gender} />

      <Label htmlFor='HSC_Marks'>HSC Marks</Label>
      <Textarea id='HSC_Marks' type="text" value={form.HSC_Marks} />

      <Label htmlFor='SSC_Marks'>SSC Marks</Label>
      <Textarea id='SSC_Marks' type="text" value={form.SSC_Marks}  />

      <Label htmlFor='Email'>Email</Label>
      <Textarea id='Email' type="text" value={form.Email} />

      <Label htmlFor='Mobile_No'>Mobile No</Label>
      <Textarea id='Mobile_No' type="text" value={form.Mobile_No} />

      <Label htmlFor='Adderess'>Adderess</Label>
      <Textarea id='Adderess' type="text" value={form.Address} />

      <Label htmlFor='District'>District</Label>
      <Textarea id='District' type="text" value={form.District} />

      <Label htmlFor='Taluka'>Taluka</Label>
      <Textarea id='Taluka' type="text" value={form.Taluka} />

      <Label htmlFor='State'>State</Label>
      <Textarea id='State' type="text" value={form.State} />

      <Label htmlFor='Pin_Code'>Pin Code</Label>
      <Textarea id='Pin_Code' type="text" value={form.Pin_Code} />


            </div>
  )
}

export default StudentCard