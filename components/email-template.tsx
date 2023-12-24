import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  body: string;
  email: string;
  subject: string;
  country?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
  body,
  subject,
  email,
  country
}) => (
  <div>
    <h1>Hola, soy {firstName}!</h1>

    <main>
      <p>
        Estoy contactando a la fundación por lo siguiente: <b>{subject}</b>
      </p>

      {body}

      <p>Estoy ubicado en {country}</p>
      <p>Este es mi email: {email}</p>
    </main>
  </div>
);
