'use client'

import { useState } from 'react'
import Modal, { FormField, Input, Textarea, ModalActions } from '../Modal'

interface Props { open: boolean; onClose: () => void }

export default function IPModal({ open, onClose }: Props) {
  const [form, setForm] = useState({ applicant_name: '', department: '', student_id: '', purpose: '' })
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const res = await fetch('/api/requests/ip', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const json = await res.json()
      if (!json.success) { setError(json.error ?? '신청 실패'); return }
      setForm({ applicant_name: '', department: '', student_id: '', purpose: '' })
      onClose()
    } catch {
      setError('네트워크 오류가 발생했습니다.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Modal title="IP 주소 신청" subtitle="Service Request" open={open} onClose={onClose}>
      <form className="space-y-3" onSubmit={handleSubmit}>
        <FormField label="신청자명">
          <Input type="text" placeholder="홍길동" value={form.applicant_name} onChange={set('applicant_name')} required />
        </FormField>
        <FormField label="소속 학과/부서">
          <Input type="text" placeholder="컴퓨터공학과" value={form.department} onChange={set('department')} required />
        </FormField>
        <FormField label="학번/사번">
          <Input type="text" placeholder="2024XXXXX" value={form.student_id} onChange={set('student_id')} required />
        </FormField>
        <FormField label="신청 목적">
          <Textarea placeholder="IP 신청 목적을 상세히 기재해 주세요." rows={3} value={form.purpose} onChange={set('purpose')} required />
        </FormField>
        {error && <p className="text-xs text-error">{error}</p>}
        <ModalActions onClose={onClose} submitting={submitting} />
      </form>
    </Modal>
  )
}
