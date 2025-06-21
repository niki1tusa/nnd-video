import { Heading } from '@/ui/Heading'
import { Settings } from 'lucide-react'
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Settings',

}

export default function SettingsPage() {
    return <div>
        <Heading Icon={Settings} isH1>
            Settings
        </Heading>
    </div>
}
