import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@radix-ui/react-accordion'
import React, { FC } from 'react'

interface Props {
    data?: any[]
}
const Faq: FC<Props> = ({ data }) => {
    return (
        <Accordion type="single" collapsible className="w-full text-white">
            {
                data?.map((item, i) => (
                    <AccordionItem key={i} value={item.question}>
                        <AccordionTrigger>{item.question}</AccordionTrigger>
                        <AccordionContent>
                            {item.response}
                        </AccordionContent>
                    </AccordionItem>
                ))
            }
        </Accordion>
    )
}

export default Faq