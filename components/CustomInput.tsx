import Link from 'next/link' 
import React, { useState } from 'react'
import Image from 'next/image'
import { z } from "zod"

import { FormControl, FormField, FormLabel, FormMessage } from "@/components/ui/form"
import { Control } from 'react-hook-form'
import { Input } from "@/components/ui/input"
import { authFormSchema } from '@/lib/utils'
import { FieldPath } from 'react-hook-form'



const formSchema = authFormSchema('sign-up');

interface CustomInput {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string, 
    placeholder: string 
}

const CustomInput = ( {control, name, label, placeholder }: CustomInput) => {
  return (
    <FormField
        control={control}
        name={name} 
        render={({ field }) => (
            <div className='form-item'>
                <FormLabel className='form-label'>
                    {label}
                </FormLabel>
 
                <div className='flex w-full flex-col'>
                    <FormControl>
                        <Input 
                            placeholder={placeholder}
                            className='input-class'
                            type={name === 'password' ? 'password' : 'text'} 
                            {...field}
                        />
                    </FormControl>

                    <FormMessage className='form-message mt-2'>
  
                    </FormMessage>
                </div>
            </div>
        )}
    />
  )
}

export default CustomInput