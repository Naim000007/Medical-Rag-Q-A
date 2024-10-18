"use client"
import { ModeToggle } from '@/components/modetoggle'
import ReportComponent from '@/components/ReportComponent'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Settings } from 'lucide-react'
import React from 'react'

type Props = {}

const HomeComponent = (props: Props) => {
  return (
    <div className='grid h-screen w-full'>
      <div className='flex flex-col'>
        <header className='sticky top-0 z-10 h-[57px] bg-background flex items-center gap-1 border-b px-4'>
          <h1 className='text-xl font-semibold text-[#D90013]'>Mr. Naim</h1>
          <div className='w-full flex flex-row justify-end gap-2'>
            <ModeToggle />
            <Drawer>
              <DrawerTrigger asChild>
                <Button className='md:hidden' variant={"outline"} size={"icon"}><Settings /></Button>
              </DrawerTrigger>
              <DrawerContent className='h-[80vh]'>
                <ReportComponent />
              </DrawerContent>
            </Drawer>
          </div>
        </header>

      </div>
    </div>
  )
}

export default HomeComponent