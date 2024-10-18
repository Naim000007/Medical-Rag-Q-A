
import React, { ChangeEvent } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'

type Props = {}

const ReportComponent = (props: Props) => {
    function handelReportSelection(event: ChangeEvent<HTMLInputElement>): void {
        throw new Error('Function not implemented.')
    }

    function extracDetails(): void {
        throw new Error('Function not implemented.')
    }

    return (
        <div className='grid w-full items-start gap-6 overflow-auto p-4 pt-0'>
            <fieldset className='relative grid gap-6 rounded-lg border p-4'>
                <legend className='text-lg font-medium'>Report</legend>
                <Input type='file' onChange={handelReportSelection}></Input>
                <Button onClick={extracDetails}>1. Upload File</Button>
                <Label>Report Summry</Label>
                <Textarea placeholder='Extracted data from the report will appear here. Get better recommendations by providing additional patient history and sympotoms...' className='min-h-72 resize-none border-0 p-3 shadow-none focus-visible:ring-0'></Textarea>
                <Button variant={'destructive'} className='bg-[#D90013]'>2. Looks Good </Button>
            </fieldset>
        </div>
    )
}

export default ReportComponent