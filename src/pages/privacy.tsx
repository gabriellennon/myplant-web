import { FooterPlant } from '@/components/FooterPlant';
import { HeaderPlant } from '@/components/HeaderPlant';
import { Jost } from 'next/font/google'
import Head from "next/head";

const jost = Jost({ subsets: ['latin'] })

export default function privacy(){
  return (
    <>
    <Head>
      <title>Política de privacidade | myPlant</title>
    </Head>
    <main
      className={`min-h-screen ${jost.className}`}
    >
      <HeaderPlant />
      <section className='h-full'>
        <div className='p-16'>
          <h1
            className='font-semibold text-[#266c42] text-6xl leading-[4.8rem]'
          >
            Política de privacidade do MyPlant
          </h1>
          <p className='text-[#5C6660] text-base mt-2'>
            A presente Política de Privacidade “Política” é fornecida pelo desenvolvedor Gabriel Lennon, nome empresarial Gabriel Lennon Soares Borges de Souza, pessoa jurídica de direito privado, inscrita no CNPJ sob o n° 43.462.386/0001-66, com endereço localizado à DF - 250 KM 2, 7 10 Apt 302;cond Condominio Entre Lagos, Regiao dos Lagos, Brasília - DF, CEP: 73255-900, contato eletrônico: gabriellennon7@gmail.com, com a finalidade de informar “Você”, na qualidade de “Usuário”, a respeito do estabelecimento da presente Política de Privacidade e com a finalidade de tornar transparentes as suas atividades e demonstrar a privacidade das informações que são coletadas, além de como elas são tratadas, em que situações são compartilhadas e quando são excluídas.
          </p>
          <div>
            <p className='text-[#5C6660] text-base mt-2'>
              O MyPlant coleta os seguintes dados pessoais: 
            </p>
            <p className='text-[#5C6660] text-base mt-2'>
              Dados Pessoais fornecidos por você, inclusive: E-mail social (Apple ou Google), nome e foto de perfil. Se você acessar nossa Plataforma e/ou criar conta, coletaremos Dados Pessoais como seu nome e sobrenome, nome de usuário e senha, e-mail, incluindo uma foto do perfil. Caso tenha criado uma conta, você pode fazer o login para revisar e atualizar suas informações e preferências.
            </p>
            <p className='text-[#5C6660] text-base mt-2'>
              Podemos compartilhar seus Dados Pessoais conforme descrito nesta Política de Privacidade ou quando lhe fornecermos aviso prévio e, na medida em que a lei aplicável exigir, obtivermos seu consentimento. O MyPlant poderá compartilhar seus Dados Pessoais com as seguintes partes pelas razões discutidas abaixo:
              Legal e Compliance. Podemos divulgar seus Dados Pessoais conforme exigido ou permitido por lei, regulamento ou procedimento legal, inclusive para responder a inquérito de agência governamental ou execução de lei ou ordem judicial, para investigar suspeita ou fraude real, atividade ilegal ou incidente de segurança, para fazer cumprir ou aplicar nossos Termos de Uso ou outro acordo que possamos ter com você, e onde acreditamos que a divulgação seja apropriada para proteger os direitos, propriedade, saúde ou segurança do myPlant, suas afiliadas (incluindo Fornecedores Terceirizados), nossos usuários, funcionários ou outros.
            </p>
            <p className='text-[#5C6660] text-base mt-2'>
              Adotamos medidas técnicas e organizacionais adequadas para ajudar a proteger a segurança de seus Dados Pessoais. Implementamos várias salvaguardas para proteger contra o acesso não autorizado aos Dados Pessoais em nossos sistemas.
              Esteja ciente de que nenhum sistema é totalmente seguro, e nós o encorajamos a tomar as medidas apropriadas para se proteger. Por exemplo, você deve proteger sua conta contra acesso não autorizado a sua senha, dispositivo móvel e computador, entre outras ações, terminando a sessão após usar um computador compartilhado, selecionando e protegendo sua senha e/ou outros mecanismos de login adequadamente, e limitando o acesso a seu computador ou dispositivo e navegador, realizando logoff após ter terminado de acessar sua conta. Não somos responsáveis por nenhuma senha perdida, roubada ou comprometida, ou por qualquer atividade em sua conta por meio de atividade não autorizada de senha.
            </p>
            <p className='text-[#5C6660] text-base mt-2'>
              Quando exigido pela lei aplicável, você pode ter os seguintes direitos em relação a seus Dados Pessoais:
              Direito de acesso; direito à portabilidade de dados. Você tem o direito de receber uma cópia dos seus Dados Pessoais que temos e como utilizamos estas informações. Você também tem o direito de receber seus Dados Pessoais em um formato estruturado e o direito de ter os Dados Pessoais transmitidos diretamente do MyPlant para você.
              Direito à retificação. Você tem o direito de ter, sem demora indevida, a correção de dados pessoais inexatos que lhe digam respeito.
              Direito de exclusão. Você tem o direito de solicitar a exclusão dos Dados Pessoais que lhe dizem respeito, a menos que o tratamento seja necessário para o exercício do direito de liberdade de expressão e informação, para o cumprimento de uma obrigação legal, por razões de interesse público, ou para o estabelecimento, exercício ou defesa de uma reivindicação legal.
              Direito de restringir ou contestar o tratamento. Você tem o direito de contestar ou restringir o tratamento de seus Dados Pessoais na medida em que conteste a precisão dos Dados Pessoais, o tratamento seja ilegal mas você se opõe à exclusão, ou você se opõe ao tratamento. Se seus Dados Pessoais forem tratados por nós para marketing direto, você tem o direito de se opor ao tratamento.
              Direito de apresentar uma reclamação. Você tem o direito de apresentar uma reclamação ao nosso responsável por proteção de dados ou a uma autoridade legal. Como regra, você pode contatar a autoridade legal de seu local de residência habitual.
              Direito de retirar o consentimento. Você pode retirar seu consentimento para o tratamento de seus Dados Pessoais por nós a qualquer momento.
              Se você gostaria de gerenciar, alterar ou excluir seus Dados Pessoais, você pode fazê-lo nas configurações da Plataforma MyPlant. Alternativamente, você pode exercer qualquer um dos direitos listados acima, entrando em contato conosco.

              A eliminação ou limitação do uso de seus Dados Pessoais terá impacto nas características e usos dentro da plataforma que dependem dessas informações. Observe que poderemos verificar sua identidade antes de podermos tratar qualquer uma das solicitações descritas nesta seção e, a nosso critério, poderemos negar sua solicitação se não formos capazes de verificar sua identidade. Como parte deste processo, poderá ser necessária uma identificação governamental ou outra.

              Quando permitido pela lei aplicável, você poderá designar um agente autorizado para fazer solicitação em seu nome, contatando-nos através da Central de Ajuda, mas você deverá fornecer a documentação necessária, incluindo a identificação válida do solicitante emitida por autoridade pública, a identificação válida do agente autorizado emitida por autoridade pública, procuração com firma autenticada para agir em nome do solicitante e outras informações necessárias para verificar a autenticidade da solicitação.
            </p>
          </div>
        </div>
      </section>
      <FooterPlant />
    </main>
  </>
  )
}