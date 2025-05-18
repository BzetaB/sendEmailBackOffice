import { MailSendingFilter } from "../components/MailSendingFilter"
import { HeaderFilter } from "../components/UI/HeaderFilter"

export const SendEmail = () => {
    return (
        <div className="mt-4 flex flex-col justify-center">
            <HeaderFilter title="Envío de Correos" />
            <div className="flex justify-center mt-4">
                <MailSendingFilter />
            </div>
        </div>
    )
}