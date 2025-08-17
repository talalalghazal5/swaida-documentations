import React from 'react'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from './ui/table'

export default function DocsTable() {
    return (
        <div dir='rtl' className="w-full">
            <Table className="text-start justify-start">
                <TableHeader className="text-start">
                    <TableRow>
                        <TableHead className="text-start" >التسلسل</TableHead>
                        <TableHead className="text-start">اسم المتضرر الثلاثي</TableHead>
                        <TableHead className="text-start">الرقم الوطني</TableHead>
                        <TableHead className="text-start">رقم الهاتف</TableHead>
                        <TableHead className="text-start">العنوان</TableHead>
                        <TableHead className="text-start">نوع الملكية</TableHead>
                        <TableHead className="text-start">نوع الضرر</TableHead>
                        <TableHead className="text-start">وصف الضرر</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className='text-gray-700'>
                        <TableCell>1</TableCell>
                        <TableCell>طلال هاشم الغزال</TableCell>
                        <TableCell>13010193380</TableCell>
                        <TableCell>0935299727</TableCell>
                        <TableCell>مفرق سهوة بلاطة</TableCell>
                        <TableCell>ملك</TableCell>
                        <TableCell>مداهمة عسكرية</TableCell>
                        <TableCell>سرقات وتكسير أبواب</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}
