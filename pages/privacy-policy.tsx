import { Divider, Flex, Heading, Text, useTheme } from '@chakra-ui/react'

function PrivacyPolicy() {
  const {
    colors: { brandTan, brandRed },
  } = useTheme()
  return (
    <Flex
      direction="column"
      alignItems="center"
      padding="2rem"
      background={brandTan}
      color={brandRed}
      minHeight="100vh"
      paddingTop="6rem"
    >
      <Heading size="2xl" padding="1rem 0" maxWidth="40rem">
        Terms of Service
      </Heading>
      <Divider color={brandRed} maxWidth="40rem" />
      <Text padding="1rem 0" maxWidth="40rem">
        You are visiting a website (the “Website”) that is property of Manana surf LLC, and/or its
        affiliates or subsidiaries (collectively, “mañana”). The following terms and conditions of
        use (the “Agreement”) govern your use of the Website and its Contents, as defined below.
        Please be advised that your use of the Website constitutes your agreement to follow and be
        bound by the Agreement. We reserve the right to update or modify the Agreement at any time
        without prior notice. If you do not agree to all of the terms and conditions set forth
        herein, do not use the Website.
      </Text>
      <Heading size="2xl" padding="1rem 0" maxWidth="40rem">
        Intellectual Property
      </Heading>
      <Divider color={brandRed} maxWidth="40rem" />
      <Text padding="1rem 0" maxWidth="40rem">
        Mañana respects the intellectual property of others. If you believe that intellectual
        property owned by you or a third party has been copied or used on the Website in any way
        that constitutes copyright infringement or infringement of other applicable intellectual
        property law, please contact mañana.
      </Text>
      <Heading size="2xl" padding="1rem 0" maxWidth="40rem">
        Site Usage and Contents
      </Heading>
      <Divider color={brandRed} maxWidth="40rem" />
      <Text padding="1rem 0" maxWidth="40rem">
        The Website and the Contents are intended solely for personal, non-commercial use. You may
        download or copy the Contents and other downloadable materials displayed on the Website for
        your personal informational use only. No right, title or interest in any downloaded Contents
        is transferred to you as a result of any such downloading or copying or any other use of the
        Website. You may not reproduce (except as specifically set forth herein), publish, transmit,
        distribute, display, modify, create derivative works from, sell or exploit in any way any of
        the Contents or the Website.
        <br />
        <br />
        Mañana makes reasonable effort to ensure that the Contents of the Website are accurate and
        free from errors. Occasionally there may be information on the Website that contains
        typographical errors, inaccuracies, or omissions including, but not limited to, those
        related to product descriptions, pricing, promotions, offers, and availability. Mañana makes
        no representations or warranties as to the accuracy or completeness of any of the Contents
        including without limitation, the availability, quality or price of any products included on
        the Website or otherwise referred to in the Contents.
        <br />
        <br />
        Mañana makes every effort to display the colors of our products as accurately as possible on
        the Website. Please be advised that mañana cannot guarantee that your computer monitor’s
        display of any color will be accurate.
        <br />
        <br />
        The Website may contain links to other websites and may on occasion display content or
        information from websites owned by third parties. Mañana is in no way responsible for any
        third party website or its content or information. Any such links are accessed at the user’s
        absolute discretion and risk.
      </Text>
      <Heading size="2xl" padding="1rem 0" maxWidth="40rem">
        Liability and Indemnity
      </Heading>
      <Divider color={brandRed} maxWidth="40rem" />
      <Text padding="1rem 0" maxWidth="40rem">
        UNDER NO CIRCUMSTANCES SHALL MANANA BE LIABLE FOR DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
        CONSEQUENTIAL OR EXEMPLARY DAMAGES (EVEN IF MANANA HAS BEEN ADVISED OF THE POSSIBILITY OF
        SUCH DAMAGES), RESULTING FROM ANY ASPECT OF YOUR USE OF THE WEBSITE, WHETHER THE DAMAGES
        ARISE FROM USE OR MISUSE OF THE WEBSITE, FROM INABILITY TO USE THE WEBSITE, OR THE
        INTERRUPTION, SUSPENSION, MODIFICATION, ALTERATION, OR TERMINATION OF THE WEBSITE. SUCH
        LIMITATION SHALL ALSO APPLY WITH RESPECT TO DAMAGES INCURRED BY REASON OF OTHER SERVICES OR
        PRODUCTS RECEIVED THROUGH OR ADVERTISED IN CONNECTION WITH THE WEBSITE OR ANY LINKS ON THE
        WEBSITE, AS WELL AS BY REASON OF ANY INFORMATION OR ADVICE RECEIVED THROUGH OR ADVERTISED IN
        CONNECTION WITH THE WEBSITE OR ANY LINKS ON THE WEBSITE. THESE LIMITATIONS SHALL APPLY TO
        THE FULLEST EXTENT PERMITTED BY LAW. In some jurisdictions, limitations of liability are not
        permitted. In such jurisdictions, some of the foregoing limitation may not apply to you.
        <br />
        <br />
        You agree to indemnify and hold mañana, its officers, subsidiaries, affiliates, successors,
        assigns, directors, officers, agents, service providers, suppliers and employees, harmless
        from any claim or demand, including reasonable attorney fees and court costs, made by any
        third party due to or arising out of your use of the Website, your violation of the
        Agreement, your breach of any of the representations and warranties herein, or your
        violation of any rights of another.
      </Text>
      <Heading size="2xl" padding="1rem 0" maxWidth="40rem">
        Transactions
      </Heading>
      <Divider color={brandRed} maxWidth="40rem" />
      <Text padding="1rem 0" maxWidth="40rem">
        Mañana, in its sole discretion, reserves the right to refuse any order placed with us or
        limit quantities purchased per person, per household or per order. In the event we make a
        change to or cancel an order, we will attempt to notify you by contacting the e-mail and/or
        billing address/phone number provided at the time the order was made.
      </Text>
      <Heading size="2xl" padding="1rem 0" maxWidth="40rem">
        Governing Law / Miscellaneous Terms
      </Heading>
      <Divider color={brandRed} maxWidth="40rem" />
      <Text padding="1rem 0" maxWidth="40rem">
        This Agreement shall be construed in accordance with the laws of the State of Texas, without
        regard to its conflict of law provisions. Any dispute arising under this Agreement shall be
        resolved exclusively by the state and/or federal courts of the State of Texas, County of
        Travis and/or the Western District of the State of Texas. The waiver of any provision of the
        Agreement shall not be considered a waiver of any other provision or of manana’s right to
        require strict observance of each of the terms herein. If any provision of the Agreement is
        found to be unenforceable or invalid for any reason, that provision shall be severable, and
        all other provisions shall remain in full force and effect. This Agreement constitutes the
        entire agreement between us relating to your use of the Website and its Contents.
      </Text>
    </Flex>
  )
}

export default PrivacyPolicy
